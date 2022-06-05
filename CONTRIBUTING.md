## Guide
---
기여자 표시 뜨게하는 방법
---

1. 프로젝트 원격 저장소 포크(Fork)를 찍습니다. 

> 프로젝트 상단에 Fork 버튼
> <img width="800" alt="image" src="https://user-images.githubusercontent.com/68332735/172034531-4fc95512-4547-416a-afca-f375f5d91569.png">
---
<img width="768" alt="image" src="https://user-images.githubusercontent.com/68332735/172034577-5d394dd0-46d6-45e4-acaf-7bdd198ec17e.png">

---

2. 포크 찍은 Repository를 클론 받아서 브랜치를 생성한 뒤 커밋 후 푸시합니다. 
3. 우리 저장소에서 PR(pull request)을 요청합니다.
4. ![image-20220605125036703](https://tva1.sinaimg.cn/large/e6c9d24egy1h2x853p0bbj21ym0t0422.jpg)

Compare & Pull Request가 안뜨면 Create Pull Request가 있을거예요.

![image-20220605125409034](https://tva1.sinaimg.cn/large/e6c9d24egy1h2x88safjdj21cd0u0whr.jpg)

- 제목과 내용을 작성합니다.

- 우측 Labels에 상태 라벨을 걸어둡니다.

- Projects 부분에 @Diary Project로 매칭시켜놔야해요. (Project Workflow 연동)

- Assignees는 본인 또는 같이 해당 부분을 작업한 담당자를 올립니다.
- Reviewers는 저장소 관리자를 걸어주세요.

머지가 완료되면 우측 하단에 프로젝트 기여자가 표시됩니다.
<img width="465" alt="image" src="https://user-images.githubusercontent.com/68332735/172034492-e6371bfd-3ce5-41e4-8fe0-6d041f692c74.png">


----

푸쉬 하기전에는 항상 
`git pull origin master` 
하고나서 분기(브랜치)를 최신 상태로 만들어 두셔야 해요

푸쉬를 먼저 해버렸다해도 
`git pull origin master`해서 충돌나면 충돌 잡고 다시 커밋 후 푸쉬
충돌이 안났더라면 그대로 `git pull origin master` ==> 커밋 후 푸쉬

