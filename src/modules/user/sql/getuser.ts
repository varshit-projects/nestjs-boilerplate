export default `select 
                        l.id, 
                        l.first_name,
                        l.last_name,
                        l.email,
                        l.phone,
                        l.hash,
                        l.isEmailVerified,
                        l.isPhoneVerified,
                        l.createdat,
                        r.name As rolename
                    from libuser l
                    inner join role r on l.roleid = r.id 
                    where email='<%email%>'`;