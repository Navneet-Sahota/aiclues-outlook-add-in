# AIclues Outlook Add-in

A task management add-in for Microsoft Outlook (Desktop & Web)
demo: https://www.loom.com/share/932fbd3cef9d49bc89538c2d8b5882ea

## Local Testing on macOS

### Prerequisites

- Node.js v16+
- npm v8+
- Microsoft Outlook Desktop for Mac
- Allow unsigned add-ins in Outlook

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-repo/AIclues.git
   cd AIclues

   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start development server**

   ```bash
   npm start
   ```

4. **Install manifest in Outlook**

   ```bash
   # Create required directory
   mkdir -p ~/Library/Containers/com.microsoft.Outlook/Data/Documents/wef

   # Copy manifest
   cp manifest.xml ~/Library/Containers/com.microsoft.Outlook/Data/Documents/wef/
   ```

5. **Enable unsigned add-ins**
   - Open Outlook
   - Go to Outlook → Preferences → Security
   - Check "Allow unsigned add-ins"

### Usage

1. **Restart Outlook**
2. **Open any email message**
3. **Click "Home" tab → "AiClues" button**
4. **Test features:**
   - Enter task title & description
   - Submit form
   - Verify success toast
