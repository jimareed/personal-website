# personal-website
Template for a simple personal website


## install
```
git clone https://github.com/jimareed/personal-website
cd personal-website
docker build . -t website-image
docker run -p 80:80 -d --name website website-image
```

## cleanup
```
docker stop website
docker rm website
```
