-- INSERT INTO role(name,level)
-- VALUES ('admin',1),
--         ('user',2);

INSERT INTO libuser(first_name,last_name,email,phone,isEmailVerified,isPhoneVerified,RoleId)
            values($1,$2))