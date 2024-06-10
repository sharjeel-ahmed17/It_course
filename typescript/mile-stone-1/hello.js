const fs = require('fs');
const path = require('path');

// Function to create folders and index.ts files
function createFolders() {
    for (let i = 1; i <= 45; i++) {
        // Create the folder name
        const folderName = i.toString();
        // Create the full path for the folder
        const folderPath = path.join(__dirname, folderName);

        // Create the folder
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
            console.log(`Folder ${folderName} created.`);
        } else {
            console.log(`Folder ${folderName} already exists.`);
        }

        // Create the index.ts file inside the folder
        const filePath = path.join(folderPath, 'index.ts');
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, '');
            console.log(`index.ts created in folder ${folderName}.`);
        } else {
            console.log(`index.ts already exists in folder ${folderName}.`);
        }
    }
}

// Run the function to create folders and files
createFolders();
