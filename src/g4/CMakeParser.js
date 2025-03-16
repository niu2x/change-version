// Generated from grammer-antlr4/CMake.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import CMakeListener from './CMakeListener.js';
const serializedATN = [4,1,11,40,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,5,0,
10,8,0,10,0,12,0,13,9,0,1,0,1,0,1,1,1,1,1,1,1,1,5,1,21,8,1,10,1,12,1,24,
9,1,1,1,1,1,1,2,1,2,1,3,1,3,1,3,5,3,33,8,3,10,3,12,3,36,9,3,1,3,1,3,1,3,
0,0,4,0,2,4,6,0,1,2,0,3,4,6,7,40,0,11,1,0,0,0,2,16,1,0,0,0,4,27,1,0,0,0,
6,29,1,0,0,0,8,10,3,2,1,0,9,8,1,0,0,0,10,13,1,0,0,0,11,9,1,0,0,0,11,12,1,
0,0,0,12,14,1,0,0,0,13,11,1,0,0,0,14,15,5,0,0,1,15,1,1,0,0,0,16,17,5,3,0,
0,17,22,5,1,0,0,18,21,3,4,2,0,19,21,3,6,3,0,20,18,1,0,0,0,20,19,1,0,0,0,
21,24,1,0,0,0,22,20,1,0,0,0,22,23,1,0,0,0,23,25,1,0,0,0,24,22,1,0,0,0,25,
26,5,2,0,0,26,3,1,0,0,0,27,28,7,0,0,0,28,5,1,0,0,0,29,34,5,1,0,0,30,33,3,
4,2,0,31,33,3,6,3,0,32,30,1,0,0,0,32,31,1,0,0,0,33,36,1,0,0,0,34,32,1,0,
0,0,34,35,1,0,0,0,35,37,1,0,0,0,36,34,1,0,0,0,37,38,5,2,0,0,38,7,1,0,0,0,
5,11,20,22,32,34];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CMakeParser extends antlr4.Parser {

    static grammarFileName = "CMake.g4";
    static literalNames = [ null, "'('", "')'" ];
    static symbolicNames = [ null, null, null, "Identifier", "Unquoted_argument", 
                             "Escape_sequence", "Quoted_argument", "Bracket_argument", 
                             "Bracket_comment", "Line_comment", "Newline", 
                             "Space" ];
    static ruleNames = [ "file_", "command_invocation", "single_argument", 
                         "compound_argument" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CMakeParser.ruleNames;
        this.literalNames = CMakeParser.literalNames;
        this.symbolicNames = CMakeParser.symbolicNames;
    }



	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CMakeParser.RULE_file_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 11;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 8;
	            this.command_invocation();
	            this.state = 13;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 14;
	        this.match(CMakeParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	command_invocation() {
	    let localctx = new Command_invocationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CMakeParser.RULE_command_invocation);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.match(CMakeParser.Identifier);
	        this.state = 17;
	        this.match(CMakeParser.T__0);
	        this.state = 22;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 218) !== 0)) {
	            this.state = 20;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 3:
	            case 4:
	            case 6:
	            case 7:
	                this.state = 18;
	                this.single_argument();
	                break;
	            case 1:
	                this.state = 19;
	                this.compound_argument();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 24;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 25;
	        this.match(CMakeParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	single_argument() {
	    let localctx = new Single_argumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CMakeParser.RULE_single_argument);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 216) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	compound_argument() {
	    let localctx = new Compound_argumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CMakeParser.RULE_compound_argument);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(CMakeParser.T__0);
	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 218) !== 0)) {
	            this.state = 32;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 3:
	            case 4:
	            case 6:
	            case 7:
	                this.state = 30;
	                this.single_argument();
	                break;
	            case 1:
	                this.state = 31;
	                this.compound_argument();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 36;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 37;
	        this.match(CMakeParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CMakeParser.EOF = antlr4.Token.EOF;
CMakeParser.T__0 = 1;
CMakeParser.T__1 = 2;
CMakeParser.Identifier = 3;
CMakeParser.Unquoted_argument = 4;
CMakeParser.Escape_sequence = 5;
CMakeParser.Quoted_argument = 6;
CMakeParser.Bracket_argument = 7;
CMakeParser.Bracket_comment = 8;
CMakeParser.Line_comment = 9;
CMakeParser.Newline = 10;
CMakeParser.Space = 11;

CMakeParser.RULE_file_ = 0;
CMakeParser.RULE_command_invocation = 1;
CMakeParser.RULE_single_argument = 2;
CMakeParser.RULE_compound_argument = 3;

class File_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CMakeParser.RULE_file_;
    }

	EOF() {
	    return this.getToken(CMakeParser.EOF, 0);
	};

	command_invocation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Command_invocationContext);
	    } else {
	        return this.getTypedRuleContext(Command_invocationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CMakeListener ) {
	        listener.enterFile_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CMakeListener ) {
	        listener.exitFile_(this);
		}
	}


}



class Command_invocationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CMakeParser.RULE_command_invocation;
    }

	Identifier() {
	    return this.getToken(CMakeParser.Identifier, 0);
	};

	single_argument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Single_argumentContext);
	    } else {
	        return this.getTypedRuleContext(Single_argumentContext,i);
	    }
	};

	compound_argument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Compound_argumentContext);
	    } else {
	        return this.getTypedRuleContext(Compound_argumentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CMakeListener ) {
	        listener.enterCommand_invocation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CMakeListener ) {
	        listener.exitCommand_invocation(this);
		}
	}


}



class Single_argumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CMakeParser.RULE_single_argument;
    }

	Identifier() {
	    return this.getToken(CMakeParser.Identifier, 0);
	};

	Unquoted_argument() {
	    return this.getToken(CMakeParser.Unquoted_argument, 0);
	};

	Bracket_argument() {
	    return this.getToken(CMakeParser.Bracket_argument, 0);
	};

	Quoted_argument() {
	    return this.getToken(CMakeParser.Quoted_argument, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CMakeListener ) {
	        listener.enterSingle_argument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CMakeListener ) {
	        listener.exitSingle_argument(this);
		}
	}


}



class Compound_argumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CMakeParser.RULE_compound_argument;
    }

	single_argument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Single_argumentContext);
	    } else {
	        return this.getTypedRuleContext(Single_argumentContext,i);
	    }
	};

	compound_argument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Compound_argumentContext);
	    } else {
	        return this.getTypedRuleContext(Compound_argumentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CMakeListener ) {
	        listener.enterCompound_argument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CMakeListener ) {
	        listener.exitCompound_argument(this);
		}
	}


}




CMakeParser.File_Context = File_Context; 
CMakeParser.Command_invocationContext = Command_invocationContext; 
CMakeParser.Single_argumentContext = Single_argumentContext; 
CMakeParser.Compound_argumentContext = Compound_argumentContext; 
