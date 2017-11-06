import { Question } from './question';
export class QuestionServer {
  getQuestionList():[Question] {
    return [
      {
        title: '账户登录不上',
        answers: ['可能由于手机网络问题，请检查网络连接是否正常', '可能服务器繁忙，可稍后再试', '可能是我们的服务器出现问题了，稍后重试等待解决', '其他未知原因，联系客服处理']
      },
      {
        title: '订单没有处理',
        answers: ['订单处理需要一定的时间，请耐心等待一下', '订单详情中可以查看处理状态，当然你也可以进行投诉', '加入粉丝群，联系客服进行投诉咨询', '企鹅精灵，期待你的加入']
      },
      {
        title: '充值不成功',
        answers: ['联系客服查询结果，手动处理', '直接联系客服手动加款，还可获得更多优惠哦']
      },
      {
        title: '你们的商品有保证吗',
        answers: ['APP中的商品都是经过认真审核的，放心购买', '所有的供货商都是精挑细选的，全都是一手货源', '任何不满意的可以在粉丝群中联系客服投诉举报']
      },
      {
        title: '请问我可以供货吗',
        answers: ['企鹅精灵长期招收优秀供货商，只要你够优秀我们都欢迎', '想要成为供货商请联系客服获取详细情况', '企鹅精灵欢迎您的入驻']
      },
      {
        title: '供货需要什么条件吗',
        answers: ['企鹅精灵长期招收优秀供货商，只要你够优秀我们都欢迎', '想要成为供货商请联系客服获取详细情况', '企鹅精灵欢迎您的入驻']
      }
    ]
  }
}