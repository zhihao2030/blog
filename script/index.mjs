 async function saveComment(ctx) {
    try {
        const commentController = {}
        const {comment,username,id} = ctx.query
        const time = getTime()
        const data = {comment,username,pid:id ? id:null,time}
        await commentController.insertOne(data)
        ctx.body = {
            code: 200,
            data: 1
        }
    } catch {
        ctx.body = {
            code: 200,
            data: 0,
            msg: '网络错误'
        }
    }

}
 async function getComment(ctx) {
     try {
         const commentController = {}
         const time = getTime()
         const data = {comment,username,pid:id ? id:null,time}
         await commentController.insertOne(data)
         ctx.body = {
             code: 200,
             data: 1
         }
     } catch {
         ctx.body = {
             code: 200,
             data: 0,
             msg: '网络错误'
         }
     }
 }
