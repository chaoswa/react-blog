module.exports = options=>{
  return async function adminauth(ctx,next){
    console.log('openid',ctx.session.openId)
    if(ctx.session.openId){
      await next()
    }else{
      ctx.body = {data:'没有登录'}
    }
  }
}