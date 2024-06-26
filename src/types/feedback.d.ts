// 用户反馈基本类型
export interface IFeedBack {
  /**
   *当前页
   */
  current: number
  /**
   * 每页显示数量
   */
  size: number
  /**
   * 数量总数
   */
  total: number
  /**
   * 总页数
   */
  pages: number
  records: IFeedBackInfo[]
}

// 用户反馈类型
export interface IFeedBackInfo {
  /**
   * 反馈Id
   */
  feedbackId: number
  /**
   * 反馈者
   */
  userId: number
  /**
   * 反馈者用户名称
   */
  username: string
  /**
   * 反馈标题
   */
  title: string
  /**
   * 反馈内容
   */
  content: string
  /**
   * 反馈时间
   */
  feedTime: string
  /**
   * 是否已读
   */
  haveRead: string
  /**
   * 反馈图片ID
   */
  feedbackImageId: number[]
  /**
   * 反馈图片数组
   */
  imageUrl: string[]
  /**
   * uuid
   */
  uuid: number
  /**
   * 反馈类型
   */
  type: number
  /**
   * (0未读1已读2已读已回复)
   */
  state: enum
  /**
   * 版本号
   */
  version: string
}

// 回复类型
export interface ReplyInfoReq {
  /**
   * 系统通知标题
   */
  title: string
  /**
   * 系统通知主体内容

   */
  content: string
  /**
   * 系统通知目标用户id( 广播传-1，分组传0，发给用户传1)
   */
  userId: enum
  /**
   * 分组对应的id(不是分组发送传0)
   */
  groupId: enum
  /**
   * 通知类型id 传1
   */
  typeId: number
  /**
   * 选中的用户id列表，userId=1的时候需要传
   */
  userIds: number[]
}
