## Guide
---
## 🌱 Create Issue

Issue 생성



<img width="800" src="https://tva1.sinaimg.cn/large/e6c9d24egy1h2x922ac2qj21i20u0ae7.jpg" alt="image">



우측에 Development에서 [Create a branch]()를 클릭합니다. 

> <img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h2x93ercr4j20p40mmtac.jpg" width="400" alt="image">
>
> 브랜치 생성 후 복사하여 터미널 or CMD에 붙여넣습니다. 
>
> 
>
> <img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h2x93qz7brj20os09cwey.jpg" width="400" alt="image">

or

>  **만약 브랜치를 이미 만들고 작업했다면, 본인의 브랜치로 연결 할 수 있습니다!**
>
> <img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h2x965fzpcj20hc0hy758.jpg" width="400">



해당 브랜치에서 작업 후 **COMMIT && PUSH** 



푸쉬 하기전에는 항상 `pull origin master` 하고나서 분기(브랜치)를 최신 상태로 만들어 두셔야 해요.

푸쉬를 먼저 해버렸다해도 `git pull origin master`해서 충돌나면 충돌 잡고 다시 `git commit` 후 `git push`
충돌이 안났더라면 그대로 `git pull origin master` ==> 커밋 후 푸쉬



---



## Pull Request 요청

### PR (Pull Request) 요청하기

우리 저장소에서 PR(pull request)을 요청합니다.

<img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h2x853p0bbj21ym0t0422.jpg" width="800" alt="image">



**Compare & Pull Request**가 안뜨면 **Create Pull Request && New Pull Request**가 있을거예요.



<img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h2x88safjdj21cd0u0whr.jpg" width="760" alt="image">





- 제목과 내용을 작성합니다.

- 우측 Labels에 상태 라벨을 걸어둡니다.

- Projects 부분에 `@Diary Project`로 매칭시켜놔야해요. (Project Workflow 연동)

- Assignees는 본인 또는 같이 해당 부분을 작업한 담당자를 올립니다.
- Reviewers는 저장소 관리자, 머지를 해주어야 하는 사람을 걸어주세요.





### 💡 Project Workflow Description

Repository의 Projects 메뉴로 들어가면 

<img width="760" alt="image" src="https://tva1.sinaimg.cn/large/e6c9d24egy1h2x9i1nm2vj23c00owtcf.jpg">

이런 뷰가 보일거예요. 딱히 여기서는 관리할건 없고, 위에서 이슈 가이드대로 Label과 Project Status를 설정하면 알아서

티켓들이 이동되어서 어떤 작업처리들이 남았는지, 어떤 작업들이 끝났는지 한 눈에 알 수 있어요.



---







기여자 표시 뜨게하는 방법
---

1. 프로젝트 원격 저장소 포크(Fork)를 찍습니다. 

> 프로젝트 상단에 Fork 버튼
> <img width="800" alt="image" src="https://user-images.githubusercontent.com/68332735/172034531-4fc95512-4547-416a-afca-f375f5d91569.png">

>  <img width="768" alt="image" src="https://user-images.githubusercontent.com/68332735/172034577-5d394dd0-46d6-45e4-acaf-7bdd198ec17e.png">

2. 포크 찍은 Repository를 클론 받아서 브랜치를 생성한 뒤 커밋 후 푸시합니다. 





머지가 완료되면 우측 하단에 프로젝트 기여자가 표시됩니다.
<img width="350" height="700" alt="image" src="https://user-images.githubusercontent.com/68332735/172034492-e6371bfd-3ce5-41e4-8fe0-6d041f692c74.png">





