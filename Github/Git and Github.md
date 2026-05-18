# Source Control
Ensures that multiple people can code on the same file from different locations

**Main (Master)** - the name of the original branch

Every once in a while pull master and merge master into your branch to esnrue you are not missing anuy updates from your teammates

.git folder allows communication with github, your must be in a working directory with .git to communicate with github

```
git clone https://github.com/Jovan-23/new.git - clone the project from github.com
```
Now you need to use the command line and get into the current project directory which is new

```
git status - shows untracked code that can be added to github
```
### Adding Files To A Github Project
```
1a. git add index.html  - adds changes to github
1b. git add .           - adds all files
```

After git status again and you will see the cahnes are up to date and ready to be added to github.

```
2. git commit -m "adding index page" - committing to the changes from add to be added to github
```
```
3. git push - add and push those changes to github.com
```

### Pull Latest Changes
```
git pull    - pull latest changes
```


### Branching
Never work on main always branch off and merge into main.

```
git branch - shows all the branches in the project
```
```
git branch new_branch - adds a branch 
```
git branch again and you will see there are two branches now and which branch you are working in

```
git checkout new_feature - switch branches
```

Then you can add, commit and push (git push --set-upstream origin newFeature - only first time you push in new branch) on new branch and create a pull request

**Pull Request** - a proposal to merge a set of changes from one branch into another

**Merge Conflict** - both change same code, have to be resolved.
