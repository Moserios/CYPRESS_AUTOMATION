to start build docker container:

1.install docker desktop and run the docker (should be running)

2.Create Dokerfile with next values:
FROM cypress/base:18.16.0
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN $(npm bin)/cypress verify
RUN ["npm", "run", "cy:run"]

3.create file in the root of project: ".dockerignore" with line:
node_modules

4. run command : docker build -t cypress .

NOTE: if build crushes because of node version change version in the file to little-older version (instead of 17.18.1 use 17.18.0 or 17.17.0)

NOTE2: My image build was crushing at ster cypress verify!