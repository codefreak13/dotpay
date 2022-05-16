## VOTING APP

A code challenge implementing a voting app.

## Overview
The app was built using React Native and Typescript and the data set used in the app was gotten from he backend.

## Setup

### Cloning The App Repo

Open this link([Setup React Native CLI](https://reactnative.dev/docs/environment-setup)) on your computer browser tab.   
Select your operating system(OS) type as the Development OS and either iOS or android as your target OS.   
Follow the instructions to properly setup your local machine for React Native Development.

 When you have successfully completed the setup, you can proceed to clone the app.


*Before cloning the app, specify the directory/folder to clone the app to with the command line prompt*.

*For example, to clone into the Desktop folder, enter the command below into your command line*.

>```$ cd Desktop```

##

To clone the application, copy and paste any of the commands below to your machine command line, according to your git setup, then press enter

#### If your Git is setup for:

##### HTTPS

>```$ git clone https://github.com/codefreak13/dotpay.git```

##### SSH

>```$ git clone git@github.com:codefreak13/dotpay.git```
##

### Installing Node Modules
After cloning the app, open the app folder with your favourite IDE or code editor and install node modules with the command below


>```$ yarn install```
##

### Imstalling Pods For IOS
To run the ios app, the pods have to be installed with the following command
>```$ yarn pod```
##

### Running The Server
You can start the server by running the following command in your IDE
>```$ yarn backend```
##

### Running The App
All is set!
You can now build the app by running the following command on your IDE terminal

>```$ yarn ios```

or 

>```$ yarn android```

This command will also spin up the simulator/emulator and run the app



## Process Flow
I built a voting platform that allows a user to select one item from a category and thereafter display the selections. 
I first set-up the react native app and thereafter ran the provided server and connected the data gotten from it to the app.
Then, I built a component that takes the data and maps it, passing the result to a child component which renders the category title. The category data are further passed down to a sub component whcih renders them.

## Libraries Used
- styled-components - helps to write cleaner and succint styles
- react-native-fast-image - caches images and makes app more performant
- react-native-modal - used for building modals 