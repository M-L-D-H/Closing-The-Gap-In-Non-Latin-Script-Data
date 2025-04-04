# CtG Workflows

Closing the Gap publishes all its data and frontend code under an open-access (OA) license. The project's GitHub repository can be freely cloned and further developed by anyone on any local machine. This document provides comprehensive documentation of all workflows, serving as a guide for individuals who wish to contribute to the project or utilize the dataset for further research.

## Cloning the repository   

To access our dataset, clone the `master` branch of our repository to your local machine by following these steps:  

1. Select the **master** branch from the branch dropdown menu located in the upper left corner of the repository webpage.  

2. Open the **Code** dropdown menu and copy the **HTTPS** link.  

3. In a Git Bash terminal, use the following command to clone the repository to your local machine:  

    ```bash
    git clone https://github.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data.git
    ```  

   This command creates a local copy of the repository, allowing you to work with the data.  


To clone the frontend code, switch to the `frontend` branch and repeat the steps above.  

If you wish to contribute to the project directly, you can create a **pull request**, which will be reviewed and merged by our team.

## Adding New Projects  

One possible contribution to our project is the addition of new research initiatives related to **Non-Latin Script Digital Humanities (NLS DH)**. You can contribute in one of two ways:  

1. **Directly on GitHub**  
- Clone the `master` branch of the repository as described in the previous section.  
- Navigate to the **`TEMPLATES`** folder in the root directory.  
- Copy the **`project.json`** file and populate it with your project data.  
- Generate a **[unique UUID](https://www.uuidgenerator.net/)** and use it as the filename.  
- Navigate to the **`PROJECTS`** folder in the root directory and create a new folder named after a shortened version of your project’s title. Use all **lowercase letters** and replace spaces with **underscores (`_`)**.  
- Copy your completed JSON file into this folder.  
- Commit and push your changes, which will automatically open a **pull request**. Once reviewed, your project will be integrated into our dataset and website by the project team.  

2. **Via Email**  
- Visit our **[project website](https://m-l-d-h.github.io/Closing-The-Gap-In-Non-Latin-Script-Data/)**.  
- Select the **"Contribute"** tab from the main menu.  
- Fill out the submission form and download the **automatically generated JSON file**.  
- Send the file to **ctg@geschkult.fu-berlin.de**.  

This method is more straightforward; however, the online form only captures **basic project details**. If you wish to provide more comprehensive information, we recommend using the **GitHub submission method**.


## Adding New Keywords  

Our project employs a **custom taxonomy** of keywords to classify research projects based on their **academic discipline, research topics, outputs, methods, and resources used**. The system strictly enforces this taxonomy, rejecting any keywords that are not predefined. Since our taxonomy is continuously evolving, we periodically update it with new terms.  

To add new keywords, follow these steps:  

1. **Open the `KEYWORDS` Folder**  
   - Navigate to the **`KEYWORDS`** folder in the root directory of the repository.  

2. **Update the `KEYWORDS.json` File**  
   - Insert the new keyword **alphabetically** into the appropriate category within the **`KEYWORDS.json`** file, which contains the complete taxonomy.  

3. **Update the `KEYWORDS_DOCUMENTATION.md` File**  
   - If the keyword originates from an **existing taxonomy**, such as the **[DHA Taxonomy](https://vocabs.acdh.oeaw.ac.at/en/)** or **[TaDiRAH](https://de.dariah.eu/tadirah)**, link it to the relevant external resource.  
   - If the keyword is **new**, provide a **brief description** explaining its meaning and relevance.  

By maintaining a structured and curated taxonomy, we ensure **semantic consistency** across projects and facilitate efficient data retrieval and analysis. 

## Bumping the Schema  

To ensure the **consistency and integrity** of our data, we implement **schema validation** using **Deno**. Whenever the schema is modified or updated, follow these steps:  

1. **Open the `SCHEMATA` Folder**  
   - Navigate to the **`SCHEMATA`** folder in the root directory.  

2. **Update the `changelog.md` File**  
   - Document the changes introduced in the new schema version by updating the **`changelog.md`** file.  

3. **Modify `project_schema.ts`**  
   - This file contains the **machine-readable** description of the schema used for validation.  
   - Update the **`schemaVersion`** variable to reflect the new version number.  
   - Navigate to the specific section that requires modification (the **element order** follows that of all data entries).  
   - Insert your changes, ensuring they adhere to the existing **TypeScript syntax**.  
   - If you are unfamiliar with **TypeScript**, follow the structure of similar elements.  

4. **Update the `project.json` Template**  
   - In the **`TEMPLATES`** folder, apply the schema updates to **`project.json`**.  
   - Ensure that the **`schema_version`** field is set to the new version number.  

5. **Apply Changes to All Projects**  
   - Use an **automated script** to propagate the changes across all existing projects.  
   - Update the **schema version** within each project entry to maintain consistency.  

By following these steps, we guarantee that all projects comply with the latest schema version, preventing **validation errors** and ensuring **data standardization**.

## Running Schema Tests Locally  

To ensure that all our data entries adhere to the **schema**, we have implemented a **GitHub Action** that automatically triggers schema validation for every **pull request**.  

For contributors who commit regularly, we have also enabled the ability to run these tests **locally**, eliminating the need to push changes before validating them.  

Steps to Run the Tests Locally

1. **Ensure Deno is Installed**  
   - Make sure you have **[Deno installed globally](https://docs.deno.com/runtime/getting_started/installation/)** on your machine.  
   - Verify the installation by running:  
     ```bash
     deno --version
     ```

2. **Navigate to the Repository Root**  

3. **Run the Test Command**  
   You can use either of the following commands to execute the schema tests:  
   
   ```bash
   npm run test

   ```markdown
   or  

   ```bash
   deno test --allow-read TESTS/schema_tests.ts   ```

   Both commands execute the same validation process.  

4. **Review the Output**  
   - The test will check all relevant files against the schema.  
   - Any files that fail the validation will be listed in the terminal output.  
   ```

## Fixing broken links Lychee

We use link verification toolto extract hyperlinks from all of our JSON files, and then to check whether they resolve. In the context of "Closing the Gap," this usually means links to other projects' websites, to researchers' homepages, etc. Checking these links on a regular basis allows us to replace them as URLs change and websites go down.

command
lychee --max-concurrency 16 -m 3 *.json

## Sending the frontend copy to Wayback Machine 

## Monthly releases to Zenodo 

## Updating dependencies

## Adding contributors 

## Rebuilding the Site Manually  

Our website is hosted on **GitHub Pages**. Given our strong emphasis on **sustainability**, we have designed it to be fully **static**. All data is consolidated into a JSON file (**`ENTRIES.json`**), which serves as the foundation for rendering the site. This file requires **manual updates**, which we perform **once a week**.  

To manually deploy the website, follow these steps:  

**1. Ensure `npm` is Installed**  
Before proceeding, verify that **Node.js** and its package manager (`npm`) are installed on your local machine.  

**2. Switch to the `frontend` Branch**  
Navigate to the **frontend branch** of the repository using Git:  

```bash
git checkout frontend
```

**3. Update `ENTRIES.json`**  
Run the following command in **Bash** to trigger the script that updates the `ENTRIES.json` file:  

```bash
npm run archive
```

**4. Commit and Push the Changes**  
After updating the data, commit and push the changes to the `frontend` branch:  

```bash
git add .
git commit -m "Regenerate static data"
git push
```

**5. Build and Deploy the Website**  
To rebuild and deploy the website, execute the following commands:  

```bash
npm run build
npm run deploy
```

- Running **`npm run build`** is **optional** but recommended, as it verifies whether the website can be built correctly.  
- If there are any issues, the command will return an **error** without publishing the changes.  
- If successful, **`npm run deploy`** will publish the updated website.  

By following these steps, you ensure that the site remains **up-to-date** while maintaining its **static structure** for sustainability and efficiency.