insert into users(id, email,password, username) values(1, 'user1@email.com','$2a$10$cySCQXqWaYa1xPxGKPXI3.aJgSO8Koc/VpOmAu6KUFEqhJBB39rtu' ,'user1');
insert into users(id, email,password, username) values(2, 'user2@email.com','$2a$10$b6ZpDRiVqxmosHTOJ2rpguiIu6IvpTj5.WBD3q6SgW73wkKWmi0Zq' ,'user2');
insert into users(id, email,password, username) values(3, 'user3@email.com','$$2a$10$nmEwzsmwZjAjhS9a8sk.I.g8vLbwJh5mZcboU9Ioc6y2F18H.tXzS' ,'user3');
insert into users(id, email,password, username) values(4, 'user4@email.com','$2a$10$mj/KcLscI6Xkp6Xrks8J/uEE9ghsi16sBU5dnxPpkbcI6sQWfv2t.' ,'user4');
insert into users(id, email,password, username) values(5, 'user5@email.com','$2a$10$cxM5ofrXE9r0xNbOYl4RmuXvKq802BYUhcgftuhz2rMNPj1afYgom' ,'user5');

insert into tweets(id, message,author) values(10001, 'My first tweet U1', 'user1');
insert into tweets(id, message,author) values(10002, 'My Second tweet U1', 'user1');
insert into tweets(id, message,author) values(10003, 'My first tweet U2', 'user2');
insert into tweets(id, message,author) values(10004, 'My first tweet U3', 'user3');
insert into tweets(id, message,author) values(10005, 'My first tweet U4', 'user4');

insert into roles(id, name) values(1, 'ROLE_USER');

insert into user_roles(user_id, role_id) values(1, 1);
insert into user_roles(user_id, role_id) values(2, 1);
insert into user_roles(user_id, role_id) values(3, 1);
insert into user_roles(user_id, role_id) values(4, 1);
insert into user_roles(user_id, role_id) values(5, 1);