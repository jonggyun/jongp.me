---
title: 'HTML 기본 개념부터 다시'
date: '2018-10-27'
tags:
  - html
  - markup
---

# HTML 개념 정리

## Markup

태그를 이용해서 어느 부분이 제목이고 본문인지 구별하게 해주는 것.

HTML(HyperText Markup Language)

XML(eXtensible Markup Language)

## doctype

문서 유형을 지정!! <!doctype>

<!doctype> 으로 써도 무관하지만, 강조하기 위해 <!DOCTYPE>으로 표기하기도 한다.

doctype을 정의하지 않은 경우에는 quirks mode가 적용된다. **quirks mode**는 웹 표준이 고려되지 않은 유형이기 때문에 같은 소스 코드라도 웹 브라우저 현재 버전으로 해석되어 의도한 것과 다른 결과를 낳을 수도 있다.

doctype에는 html의 버젼과 DTD(Data Type Description)을 포함하고 있음

doctype은 태그가 아닌 단순한 문서 타입에 대한 표현

html5의 경우에는 자체적으로 DTD를 포함하고 있기 때문에 별도로 명시하지 않아도 됨

```
<!-- html5 -->
<!doctype html>

<!-- html4 -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<!-- XTHML -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
```

| HTML5                         | XHTML                          |
| ----------------------------- | ------------------------------ |
| 종료태그가 없어도 됨          | 종료태그가 **반드시** 있어야함 |
| 대소문자 구분안함             | 대소문자 **구분**              |
| 요소들 대소문자 가능          | 요소들 **소문자**만 가능       |
| 속성에 single quotations 가능 | 속성에 single quotations 불가  |
| 속성에 단축 허용              | 속성에 단축 불가               |

즉, xhtml은 html보다 문법에 엄격. html5가 나오기 전까지 최신의 문서 규격

## head Tag

```
<head>
  <meta>
  <title><title>
</head>
```

head태그에 언어 표기를 하는 경우에는 검색사이트에서 특정 언어로 제한해서 검색할 때 대상이 된다.

```
<head lang="ko">
```

한국어도 된 문서를 검색

meta 태그에는 주로 인코딩이 들어간다.

```
<meta charset="utf-8">
```

## Text 관련 Tag

| strong Tag         | b Tag                     |
| ------------------ | ------------------------- |
| 중요한 내용을 강조 | 단순히 다른 텍스트와 구별 |

| em Tag            | i Tag                     |
| ----------------- | ------------------------- |
| 중요한내용을 강조 | 단순히 다른 텍스트와 구별 |

## a Tag

target 속성

| 속성 값  | 설명                                    |                                                               |
| -------- | --------------------------------------- | ------------------------------------------------------------- |
| \_blank  | 새 창이나 새 탭                         |                                                               |
| \_self   | 기본 값! 링크가 있는 화면에서 열림      |                                                               |
| \_parent | 프레임을 사용할 경우 부모 프레임에 표시 |                                                               |
| \_top    | 프레임을 벗어나 전체화면에 표시         | iframe에서 top메뉴까지 포함한 전체화면에 반영할때 사용하면 됨 |

## SVG 이미지 - 많이 써보자 면접에서 많이 물어봤음

Scalable Vector Graphics

이미지를 아무리 확대해도 깨지지 않고, 아무리 축소해도 원래의 깨끗한 상태를 유지하는 **벡터이미지**를 사용.

데이터 시각화에서 다이어그램, 지도 등을 구현할 때 많이 사용된다. (d3.js, Raphael.js ...)

구글 지도도 이런 느낌인가??? 확대해도 안깨지니까??

지원하지 않는 브라우저(익스 8이하, 안드로이드 2.3 이하)를 위해 SVG 기능 체크를 해야한다.

[Modernizr](https://modernizr.com)에서 설정한 js파일을 받아 사용

```
  if(!Modernizr.svg) {

  }
```

## form

사용자가 웹 사이트로 정보를 보내는 요소들을 전부 form이라고 표현

```
<form method="" action="" autocomplete="">
```

autocomplete의 경우 default는 on (자동완성 기능)

### label태그

폼 요소에 레이블을 붙임

```
<label>레이블<input ...></label>

<label id="id">
  <input id="id">
</label>
```

2가지 방법으로 사용 가능.

2번째의 경우 id를 통해서 쉽게 연결 가능

### checkbox, radio button의 input을 label안에 넣을 경우

꼭 버튼을 눌러야만 동작하는 것이 아니라, label 안에 포함되는 내용을 선택해도 click action이 발생한다.

### input type="submit"의 경우 서버로 데이터를 전송, input type="image" src=""는 이미지로 submit을 할수 있음

### input type="reset"은 입력 내용을 모두 지울수 있음

### select

```
<select size="5" multiple>
  <option value="값">내용1</option>
  <option value="값" selected>내용2</option>
  <option value="값">내용3</option>
</select>
```

size는 화면에 표시될 드롭다운 메뉴 개수를 지정, multiple 속성은 다중 선택이 가능해짐

### textarea

```
<textarea cols="" rows="">
</textarea>
```

cols 가로 너비를 결정(px), rows 세로 줄 개수를 결정

### button tag vs input type="button"

```
<button>버튼</button>
<input type="button" value="버튼">
```

button 태그를 사용하면 버튼에 콘텐츠를 포함 가능(이미지 등등 ..) css 통한 디자인도 가능

### button tag vs input type="image"

button tag가 서버에서 빨리 읽어 옴

### progress

작업의 진행상태를 표시

```
<li>
  <label>제목</label>
  <progress value="10" max="60"></progress>
</li>
```

### meter

전체 크기 중 얼마나 차지하는가를 표시 progress와 비슷하지만 다름

지정된 범위 내에서 어느정도 차지하고 있는지를 표현.

## html5 시맨틱 태그

기존 html4 문서로는 수많은 div태그가 있었기 때문에 정확하게 어떤 역할을 하는지 파악하기가 힘들었음

이름만 보고도 문서 구조에서 어떤 역할을 하는지 쉽게 이해하자-> **시맨틱 태그**가 등장

실제로 웹에서 처리할 때 큰 차이가 발생!

본문을 검색하려면 section이나 article 태그를 찾아 검색하면 되기 때문!! 특히, 시각장애인들이 웹사이트를 이용할 때 유용

### `<header>`

### `<nav>`

동일한 사이트 안에서 문서나 다른 사이트의 문서로 이동하는 **링크** 모음

footer에서 사이트 링크 모음에도 많이 사용. 즉, 위치에 영향을 받지 않고 사용 가능 (header, section)

### `<section>`

콘텐츠를 주제별로 묶을 때 사용. 섹션의 제목에는 h1~h6 태그가 사용됨

section 안에 section도 사용 가능. 물론. section과 같은 레벨에 section도 사용 가능

### `<article>`

section 태그와 혼동하기 쉬움

article은 독립 적으로 배포하거나 재사용하더라도 완전한 하나의 콘텐츠로 사용 가능한 것

article 안에 section을 넣을 수도 있음

### `<aside>`

본문 외에 주변에 표시되는 기타 내용

### `<footer>`

연락처 정보와 저작권 정보를 표시

footer안에 header, section, article 다른 레이아웃 태그 사용 가능

### `<address>`

주로 footer 안에 사용

연락처 정보를 넣는데 사용

### `<div>`

그렇다면 div는 언제 사용하는가?

콘텐츠에 CSS를 적용할 때!!!
