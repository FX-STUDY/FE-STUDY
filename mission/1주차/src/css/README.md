# Display란?
웹 페이지 상에서 요소들을 어떻게 보여줄지 결정하는 속성으로 `display-inside`와 `display-outside`가 있다. 

### **display-inside**
안쪽 요소들의 display를 결정한다. 
- flow
- flow-root
- table
- [flex](https://studiomeal.com/archives/197)
- [grid](https://studiomeal.com/archives/533)
- ruby

### **display-outside**
바깥쪽의 다른 요소들과의 display를 결정한다. 
- inline
- inline-block
- block

- [출처](https://velog.io/@iamminzzy/CSS-%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83Lay-out-Display-%ED%8E%B8inline-inline-block-block)

<br></br>

# 🎀 1주차 미션 스터디한 부분 

### **🧐요구사항**
하단에 첨부된 사진과 동일한 Layout을 각각 `inline-block`, `flex`, `grid` 속성을 사용해 개발한다.

### **» inline-block** 
inline + block 하이브리드 속성이며, 기본적으로 inline처럼 줄바꿈 없이(수평정렬) 배치된다. (block처럼 width, height 등의 지정이 가능하다)

> ✍🏻내부적으로는 block의 규칙을, 외부적으로는 inline의 규칙을 따른다. 

### **» flex** 
Flex 아이템들은 가로 방향으로 배치되고, 자신이 가진 내용물의 width 만큼만 차지하게 된다. 
> ✍🏻 한 방향 레이아웃 시스템이다. (1차원)

### **» grid** 
Flex 아이템들은 가로 방향으로 배치되고, 자신이 가진 내용물의 width 만큼만 차지하게 된다. 
> ✍🏻 두 방향(가로-세로) 레이아웃 시스템 (2차원)

