const mysql = require('mysql')

// 创建连接对象
const con = mysql.createConnection({
    host: 'localhost', // 连接地址
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'myblog'
})

// 开始连接
con.connect()

// 执行sql
const sql = 'select * from users;' // 执行查询
// const sql = `update users set realname='李四' where username='lisi';` // 执行更新
// const sql = `INSERT INTO blogs (title, content, createtime, author) VALUES ('标题C', '内容C', 1556085744900, 'zhangsan');` // 执行插入
con.query(sql, (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
})

// 关闭连接
con.end()