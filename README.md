# Music_Recommend(음악 추천 봇)
## [서비스 이용하기](https://main.lunaweb.dev/Music_Recommend/build/)

## 프로젝트 개요
사용자가 추천 받고 싶은 노래를 검색하여 클릭을 하면 해당 노래와 비슷한 곡을 추천해주고,

Spotify 바로가기 링크와 미리듣기를 제공하여준다.

## Stack
- React
- Spotify API
- Cloudflare Workers
- Github Pages

## 프로젝트 설명
Spotify API는 API를 요청을 하려면 유효기간이 있는 토큰을 발급받아야 함, 프론트엔드 단에서 해당 요청을 수행하기에는 API키

개인정보 관련 문제로 Cloudflare Workers의 Serverless 시스템을 활용하여 프론트엔드에서 필요한 API들을 구축하여 Workers에서

토큰을 발급받고 해당 요청을 처리 후 프론트엔드로 해당 결과의 응답을 보내주는 형식으로 작동한다.

## DEMO IMAGE
![image](https://github.com/ejeonghun/Music_Recommend/assets/41509711/4b95472e-4e5c-47a9-beae-5ab13489afea)
### [화면구성](https://github.com/ejeonghun/Music_Recommend/wiki/%ED%99%94%EB%A9%B4-%EA%B5%AC%EC%84%B1)
