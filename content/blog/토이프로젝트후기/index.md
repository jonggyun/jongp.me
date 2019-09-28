---
title: 토이프로젝트 후기
date: 2019-04-07
description: 토이프로젝트 후기
---

영화진흥위원회에서 박스오피스 api를 제공해주고 있어서 관련 토이프로젝트를 진행했다. Back-end 없이 Front-end만 사용해서 진행했다.

예전에 잠시나마 Typescript를 사용해본 적이 있긴 하지만 그때는 React와 함께 사용하지 않았다는 점, html페이지 하나만을 위해 사용했다는 점 때문에 딱히 사용해봤다고 말은 하지 않았다.

> 사용 스택

- React hooks

- Typescript

- Styled-component

- immer

이번 토이프로젝트를 진행하면서 다른 것은 몰라도 Typescript만은 어떻게 해서든 사용해보고 싶다는 생각을 했다. 최우선으로 Typescript를 두고 그 외의 스택을 추가하기로 생각했다. CRA에서 Typescipt pack을 지원해주고 있어서 초기 셋팅을 쉽게 할 수 있었다. 하지만 redux와 붙이는 작업이 생각보다 어려웠다.

redux를 사용할 떄 발생하는 action, state 등에 모두 type을 지정해서 사용해야 했기에 헷갈리는 점이 많았다. typescript 사용하면서 react, redux 등의 사용 방법 및 흐름을 완벽하게 이해하지 못하고 있는 것을 알게 되었다.

redux에서 api를 호출하면서 가지고 온 데이터의 상태를 명확하게 지정하지 않아 component에서 사용할 때마다 에러를 발생시키고 있었다. 이 또한 처음에는 무슨 이유에서 발생한 에러인지 이해하지 못했었다.

Styled-component의 경우 회사에서 사용하고 있었기 때문에 보다 익숙해지고 싶은 마음에 사용하긴 했는데, 스타일 작업에 힘을 주지 않고 진행했기 때문에 만족할 만큼 활용했다고 보긴 어려운 것 같다.

React Hooks를 드디어 사용해봤다. componentDidMount 등의 라이프사이클의 역할을 대신할 수 있어서 편한 것 같았다. 또한, React로 개발할 경우 은근 input을 설정하는 것이 귀찮았는데 hooks를 사용하면 편하게 처리할 수 있어서 좋았다.

> 후기

이번 토이프로젝트는 typescript와 react hooks를 가볍게 접해보면서 기본 개념을 잡고자하는 목표로 진행되었다. 목표는 어느정도 이룬 것 같고 이를 바탕으로 다음 토이프로젝트에서는 보다 다양한 방법으로 사용할 수 있을 것 같다.

> 관련 링크

https://github.com/jonggyun/box-officinfo
