import wangzijunImage from '@/images/avatars/wangzijun.webp'
import hanyinImage from '@/images/avatars/hanyin.webp'
import zhangqitongImage from '@/images/avatars/zhangqitong.webp'
import heziboImage from '@/images/avatars/hezibo.webp'
import wukeImage from '@/images/avatars/wuke.webp'
import lidayuanImage from '@/images/avatars/lidayuan.webp'
import liqianImage from '@/images/avatars/liqian.webp'
import wangchangyuImage from '@/images/avatars/wangchangyu.webp'

const agendas = [
  {
    title: '2023.11.6 13:30-16:30',
    description: '华东区第一次线下 Meetup',
    location: '上海支付宝大楼 S 空间 201 百合谷',
    items: [
      {
        name: '议题分享',
        date: '13:30-16:30',
        dateTime: '2023-11-06',
        speakers: [
          {
            name: '吴珂 - 蚂蚁集团 PaaS 核心团队云原生运维负责人',
            role: '传统 PaaS 发展趋势与困境。KusionStack——蚂蚁集团开源平台工程实践',
            image: wukeImage,
          },
          {
            name: '李大元 - 蚂蚁集团 PaaS 核心团队, 开源平台工程项目 Kusion 负责人',
            role: '传统 PaaS 发展趋势与困境。KusionStack——蚂蚁集团开源平台工程实践',
            image: lidayuanImage,
          },
          {
            name: '李倩 - KodeRover 创始人兼 CEO',
            role: 'Zadig 面向开发者的云原生 DevOps 平台',
            image: liqianImage,
          },
          {
            name: '王长煜 - Bytebase 解决方案专家',
            role: 'Bytebase —— 以开发者视角重构数据库变更管理',
            image: wangchangyuImage,
          },
        ],
      },
    ],
  },
  {
    title: '2023.7.15 14:00-18:00 ',
    description: '第一次线下 Meetup, 暨 PUG 成立仪式',
    location: '北京环球金融中心 9F 大厅',
    items: [
      {
        name: '议题分享',
        date: '14:00-17:00',
        dateTime: '2023-07-15',
        speakers: [
          {
            name: '王子俊 - Laf 运营负责人，核心维护者',
            role: 'Laf 云开发平台及其实现原理',
            image: wangzijunImage,
          },
          {
            name: '韩寅 - 阿里云高级技术专家',
            role: '构建一站式 Serverless 化体验的平台工程实践',
            image: hanyinImage,
          },
          {
            name: '张起彤 - 字节跳动高级架构师',
            role: '基于云原生范式构建可"无限"扩展的内部开发者平台',
            image: zhangqitongImage,
          },
          {
            name: '何子波 - 蚂蚁集团高级技术专家',
            role: '基于 KusionStack 的平台工程实践',
            image: heziboImage,
          },
        ],
      },
      {
        name: '圆桌讨论',
        date: '17:00-18:00',
        dateTime: '2023-07-15',
        speakers: [],
      },
    ],
  },
]

export default agendas
