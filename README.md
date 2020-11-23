<p align="center">
    <img width="549" alt="스크린샷 2020-11-19 오후 10 42 21" src="https://user-images.githubusercontent.com/26402298/99673762-8a71e080-2ab8-11eb-84ca-909703fae826.png">
</p>
<p align="center">
    <img src="https://github.com/qkrdmstlr3/svg-icon-animation/blob/master/map-icon/map-icon.svg" height="300" />
</p>

### Presentation - Hook 패턴

![image](https://user-images.githubusercontent.com/26402298/99965937-f023dc80-2dd8-11eb-8bd3-b68ffb52e19c.png)

기존 패턴과의 차이점

- hook과 presentational 두개로 구성
- 기존 container대신 presentational이 주가 된다.
- presentational에는 기존과 동일하게 디자인이 들어감
  - 다른 presentational을 가져와서 렌더링 가능
- hook에는 useState, useEffect등을 활용해서 상태 관리
  - 추후에 redux 사용 시 useDispatch useSelector도 호출해서 넘겨줄 수 있음
  - 만든 상태를 presentational에게 전달
  - 상위 컴포넌트가 필요하다면 짝꿍인 presentational에게서 전달 받음.

## 내가 생각한 장점

- 도식화가 기존 패턴보다 단순해져서 좀 덜 헷갈릴 것 같다.
- 기존의 패턴과 같이 모델과 뷰 분리가 가능.
