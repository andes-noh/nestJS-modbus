# NestJs-Modbus-TCP Project(v0.1)

## 1.개요

- yarn upgrade ts-node-dev@latest ts-node@latest 버전 업그레이드
- Modbus연결을 위한 패키지 추가(jsmodbus)
- [about Modbus][id]
  [id]: https://modbus.org/ 'Modbus'

## Runtime
- [Node JS](https://nodejs.org/ko/)

## Framework
- [NestJs](https://nestjs.com/)

## 실행
- npm install or yarn
- package.json -> debug
```
"ts-node-dev --respawn --prefer-ts-exts lib/"
```
- ts-node-dev(ts 파일을 미리 컴파일하지 않고 바로 실행 시키는 엔진)

## 빌드
- package.json -> build
```
tsc --build --force
```
- tsc --build(*.ts -> *.js)

## 기능
- modbus tcp 클라이언트
- auto reconnecting

## 설정
- /.env file(host, port) 수정
- default host: localhost
- default port: 502

## 라이브러리
- [jsmodbus](https://www.npmjs.com/package/jsmodbus)

## 기타
- 

