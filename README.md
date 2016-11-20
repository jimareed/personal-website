# personal-website
Template for a simple personal website


## install
{project}=personal-website
```
git clone https://github.com/jimareed/{project}
cd {project}
docker build . -t website-image
docker run -p 80:80 -d --name website website-image
```

## cleanup
```
docker stop website
docker rm website
```
