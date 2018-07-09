<!-- SQL query -->

<!-- 데이터 삽입 -->
insert users('name')values('alice');
<!-- 데이터 조회 -->
select * from users;
<!-- 데이터 업데이트 -->
update users set nmae = 'bek' where id = 1;
<!-- 데이터 삭제 -->
delete form users where id = 1;


<!-- ORM -->
데이터베이스를 객체로 추상화해 놓은 것을 ORM (Object Relational Mapping)이라고 한다.

쿼리를 직접 작성하는 대신 ORM의 메소들 데이터를 관리할 수 있는 것이 장점이다.

노드에서 SQL ORM은 시퀄라이져(Sequelizer)가 있다.


<!-- 데이터 삽입 -->
insert users('name')values('alice');
-> User.create({name: 'alice'});
<!-- 데이터 조회 -->
select * from users;
User.findAll();
<!-- 데이터 업데이트 -->
update users set nmae = 'bek' where id = 1;
User.update({name: 'bek'}, {where: {id: 1})
<!-- 데이터 삭제 -->
delete form users where id = 1;
User.destroy({where:{id:1}});

맨 앞에 있는 'User'를 모델이라고 한다

모델은 데이터베이스 테이블을 ORM으로 추상화한 것을 모델이라고 한다.

우리가 사용할 유저 모델을 만들어 보자


<!-- 모델 정의 -->
sequelize.define(); 

<!-- 데이터베이스 연동 -->
sequilize.sync();