# Change Version CLI

`change-version` is a command-line utility designed to update version numbers in project files. It currently supports CMake, NodeJS, and Doxygen projects. The tool automates the process of parsing and modifying version numbers within these files.

## Features

- **CMake**: Automatically updates version numbers in `CMakeLists.txt`.
- **NodeJS**: Modifies the version in `package.json`.
- **Doxygen**: Adjusts version numbers in Doxygen configuration files.

## Installation

You can install `change-version` via npm:

```bash
npm install -g @niu2x/change-version
```

## Usage

The basic syntax for using `change-version` is as follows:

```bash
change-version <projectType> -i -v <newVersion> <filePath>
```

- `<projectType>`: The type of project file to modify (`CMake`, `NodeJS`, or `Doxygen`).
- `-i`: In-place modification of the file.
- `-v <newVersion>`: The new version number to set.
- `<filePath>`: The path to the project file.


### Examples

#### CMake

To update the version number in a `CMakeLists.txt` file:

```bash
change-version CMake -i -v 1.1.1 /path/to/CMakeLists.txt
```

#### NodeJS

To change the version in a `package.json` file:

```bash
change-version Node -i -v 1.1.1 /path/to/package.json
````

#### Doxygen

To update the version in a Doxygen configuration file:

```bash
change-version Doxygen -i -v 1.1.1 /path/to/Doxyfile
```
