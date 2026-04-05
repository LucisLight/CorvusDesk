# CS 351 Semester Project Template

This repository is the starter template for the CS 351 semester project.

## Structure

- `frontend/` - React frontend (npm + Vite)
- `backend/` - Java backend (Spring Boot + Maven)

## What the starter does

- The backend exposes `GET /api/messages`
- The backend returns a JSON array:
  - `hello world1`
  - `hello world2`
- The frontend calls that API and displays the results in a table

## Prerequisites

You need all of the following installed before you can run the starter project:

- **Node.js + npm** for the frontend
- **Java 17 JDK** for the backend
- **Apache Maven** for the backend build and run commands

Verify your tools after installation:

```bash
node -v
npm -v
java -version
mvn -version
```

If all four commands work, your machine is ready to run the project.

---

## Install prerequisites on macOS

### 1) Install Node.js and npm

**Recommended option:**

- Go to the official Node.js download page: https://nodejs.org/en/download
- Download the current **LTS** macOS installer (`.pkg`)
- Run the installer

After installation, open a new Terminal window and verify:

```bash
node -v
npm -v
```

### 2) Install Java 17 JDK

- Go to the Oracle JDK 17 download page
- Download the macOS installer for your machine:
  - **Apple Silicon (M1/M2/M3/ARM64):** macOS aarch64
  - **Intel Mac:** macOS x64
- Open the downloaded `.dmg`
- Run the installer

Verify:

```bash
java -version
```

### 3) Install Apache Maven

#### Option A: Homebrew (easiest if you already use Homebrew)

```bash
brew install maven
```

Verify:

```bash
mvn -version
```

#### Option B: Manual install

- Download the latest Apache Maven **binary tar.gz** archive
- Extract it somewhere permanent, for example:
  - `/Users/<your-user>/tools/apache-maven`
- Add Maven's `bin` folder to your shell profile

Example for `~/.zshrc`:

```bash
export MAVEN_HOME="$HOME/tools/apache-maven"
export PATH="$MAVEN_HOME/bin:$PATH"
```

Reload your shell:

```bash
source ~/.zshrc
```

Verify:

```bash
mvn -version
```

---

## Install prerequisites on Windows

### 1) Install Node.js and npm

- Go to the official Node.js download page: https://nodejs.org/en/download
- Download the current **LTS** Windows installer (`.msi`)
- Run the installer

Open a new Command Prompt or PowerShell window and verify:

```powershell
node -v
npm -v
```

### 2) Install Java 17 JDK

- Go to the Oracle JDK 17 download page
- Download the Windows x64 installer (`.exe`) for JDK 17
- Run the installer as needed

Open a new Command Prompt or PowerShell window and verify:

```powershell
java -version
```

### 3) Install Apache Maven

#### Option A: Manual install (recommended on Windows)

1. Download the latest Apache Maven **binary zip** archive
2. Extract it to a permanent folder, for example:
   - `C:\tools\apache-maven`
3. Add Maven's `bin` folder to your system `Path`
   - Example: `C:\tools\apache-maven\bin`
4. Optional: add a system variable named `MAVEN_HOME`
   - Example: `C:\tools\apache-maven`

After updating `Path`, open a **new** Command Prompt or PowerShell window and verify:

```powershell
mvn -version
```

#### Option B: Winget (if your machine has winget configured)

```powershell
winget install Apache.Maven
```

Then verify:

```powershell
mvn -version
```

---

## Install prerequisites on Linux

### 1) Install Node.js and npm

#### Option A: Official Node.js binaries

- Go to the official Node.js download page: https://nodejs.org/en/download
- Download the current **LTS** Linux binary archive for your architecture
- Extract it somewhere under your home directory or `/opt`
- Add its `bin` folder to your `PATH`

Example:

```bash
export PATH="$HOME/tools/node/bin:$PATH"
```

Then verify:

```bash
node -v
npm -v
```

#### Option B: Package manager (common on Linux)

Examples:

```bash
# Ubuntu / Debian
sudo apt update
sudo apt install -y nodejs npm

# Fedora
sudo dnf install -y nodejs npm
```

Then verify:

```bash
node -v
npm -v
```

### 2) Install Java 17 JDK

#### Option A: Official Oracle JDK packages or archive

- Go to the Oracle JDK 17 download page
- Download one of the Linux packages for your platform:
  - `.deb` for Debian/Ubuntu-based systems
  - `.rpm` for Fedora/RHEL-based systems
  - `.tar.gz` if you want a manual install

Then verify:

```bash
java -version
```

#### Option B: Package manager

Examples:

```bash
# Ubuntu / Debian
sudo apt update
sudo apt install -y openjdk-17-jdk

# Fedora
sudo dnf install -y java-17-openjdk-devel
```

Then verify:

```bash
java -version
```

### 3) Install Apache Maven

#### Option A: Package manager

Examples:

```bash
# Ubuntu / Debian
sudo apt update
sudo apt install -y maven

# Fedora
sudo dnf install -y maven
```

Verify:

```bash
mvn -version
```

#### Option B: Manual install

- Download the latest Apache Maven **binary tar.gz** archive
- Extract it to a permanent folder, for example:
  - `$HOME/tools/apache-maven`
- Add its `bin` directory to your `PATH`

Example:

```bash
export MAVEN_HOME="$HOME/tools/apache-maven"
export PATH="$MAVEN_HOME/bin:$PATH"
```

Reload your shell:

```bash
source ~/.bashrc
```

Verify:

```bash
mvn -version
```

---



## Run backend tests and coverage

From the `backend/` directory:

```bash
mvn test
```

This command will:
- run the backend unit tests
- generate a JaCoCo coverage report
- fail the build if overall instruction coverage is below 80%

If coverage is too low, Maven will fail with this message:

```
Don't forget it's mandatory to maintain 80% code coverage
```

After a successful run, open the HTML coverage report here:

- `backend/target/site/jacoco/index.html`


## Run the backend

```bash
cd backend
mvn spring-boot:run
```

Backend runs on:

- `http://localhost:8080`

## Run the frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

- `http://localhost:5173`

The Vite dev server proxies `/api/*` to the backend.

---

## Suggested student workflow

1. Clone the repository
2. Install Node.js, npm, Java 17, and Maven
3. Verify the starter application works locally
4. Create a feature branch
5. Begin implementing project requirements incrementally
6. Add unit tests as features are delivered
7. Use pull requests for meaningful changes

---

## Example API

`GET /api/messages`

Response:

```json
["hello world1", "hello world2"]
```
