import fs from "fs";
import antlr4 from 'antlr4';

import CMakeLexer from './g4/CMakeLexer.js';
import CMakeParser from './g4/CMakeParser.js';
import CMakeListener from './g4/CMakeListener.js';


function setNodePackageVersion(input, newVersion) {
  input = JSON.parse(input)
  input.version = newVersion
  return JSON.stringify(input, null, "  ")
}

function setCMakeProjectVersion(input, newVersion) {

  class CMakeExecuter extends CMakeListener {
    constructor(input, tokens, newVersion) {
      super();
      this.newVersion = newVersion
      this.input = input;
      this.tokens = tokens;
      this.text = ""

      this.fileStart = 0;
      this.fileStop = 0;

      this.projectStart = 0;
      this.projectStop = 0;

    }

    getText() {
      return this.text;
    }

    // Exit a parse tree produced by CMakeParser#command_invocation.
    exitCommand_invocation(ctx) {

      // this.text += this.input.getText(start.start,
      //   stop.stop) + "\n";
      if (ctx.Identifier().symbol.text == 'project') {
        let start = ctx.start;
        let stop = ctx.stop;

        this.projectStart = start.start;
        this.projectStop = stop.stop;

        this.text += this.input.getText(this.fileStart,
          this.projectStart - 1)

        // console.log("ctx.start",)
        let nextIsVersion = false;
        for (let i = ctx.start.tokenIndex; i <= ctx.stop.tokenIndex; i++) {
          if (nextIsVersion) {
            this.text += `"${newVersion}" `;
            nextIsVersion = false;
          } else {
            this.text += this.tokens.tokens[i].text + " ";
            nextIsVersion = this.tokens.tokens[i].text == "VERSION";
          }
        }
      }
    }
    // Exit a parse tree produced by CMakeParser#file_.
    exitFile_(ctx) {
      let stop = ctx.stop;
      this.fileStop = stop.stop;


      this.text += this.input.getText(this.projectStop + 1,
        this.fileStop)
    }

    // Exit a parse tree produced by CMakeParser#file_.
    enterFile_(ctx) {
      let start = ctx.start;
      this.fileStart = start.start;
    }
  };


  const chars = new antlr4.InputStream(input);
  const lexer = new CMakeLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new CMakeParser(tokens);
  const tree = parser.file_();
  const printer = new CMakeExecuter(chars, tokens, newVersion);
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);
  return printer.getText()
}

const delegate = {
  "Node": setNodePackageVersion,
  "CMake": setCMakeProjectVersion,
}

export default function setVersion(inputPath, newVersion, type, inPlace) {
  // console.log(type)
  // console.log(input)
  // console.log(newVersion)
  // 
  const input = fs.readFileSync(inputPath, 'utf-8')
  const output = delegate[type](input, newVersion)
  if (!inPlace) {
    process.stdout.write(output);
  } else {
    fs.writeFileSync(inputPath, output)
  }
}