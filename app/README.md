# Sangoom - App

**app-http.py**: HTTP 1.1 방식의 Flask 서버입니다.

**app-spdy.py**: [dogu](http://somasoma.github.io/dogu/)를 이용하여 구현한 HTTP 2.0 방식의 Flask 서버입니다.

**static**: 서버에서 사용하는 정적인 자료들입니다.

**client**: 프론트 엔드 사이드 개발환경입니다.


## Run
두 서버 모두 5000포트를 이용합니다.

HTTP 1.1를 사용하는 서버 실행.
```shell
$ python app-http.py
```


HTTP 2.0를 사용하는 서버 실행.

```shell
$ python app-spdy.py
```


