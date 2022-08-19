export default
    `INSERT INTO libuser
            (
                first_name,
                last_name,
                email,
                phone,
                RoleId,
                hash
             )
        values
            (
                '<%firstName%>',
                '<%lastName%>',
                '<%email%>',
                '<%phone%>',
                (SELECT id from role where name = '<%role%>'),
                '<%hash%>'
            )
`