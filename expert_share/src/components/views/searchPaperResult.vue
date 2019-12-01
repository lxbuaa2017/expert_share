<style scoped xmlns:vertical-align="http://www.w3.org/1999/xhtml" xmlns:vertical-align="http://www.w3.org/1999/xhtml"
       xmlns:vertical-align="http://www.w3.org/1999/xhtml">
  .layout{
    border: 1px solid #d7dde4;
    background: #fff;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #fff;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .layout-footer-center{
    text-align: center;
  }
</style>
<template>
  <div>
    <div class="layout">
      <Layout>
        <Header :style="{background: '#f5f7f9',paddingTop:'0px'}">
          <el-row style="text-align: left">
            <el-col :span=5><h3>科技专家资源共享平台</h3></el-col>
            <el-col :span=1><a style="font-size: 17px">首页</a></el-col>
            <el-col :span=13>&nbsp;</el-col>
            <el-col :span=5>
              <div style="text-align: right">
                <Dropdown style="text-align: center">
                  <Button type="primary">
                    {{username}}
                    <Icon type="ios-arrow-down"></Icon>
                  </Button>
                  <DropdownMenu v-if="login===true" slot="list">
                    <DropdownItem>个人信息</DropdownItem>
                    <DropdownItem>收藏</DropdownItem>
                    <DropdownItem>关注</DropdownItem>
                    <DropdownItem>粉丝</DropdownItem>
                    <DropdownItem>退出账户</DropdownItem>
                  </DropdownMenu>
                  <DropdownMenu v-else slot="list">
                    <DropdownItem>登录</DropdownItem>
                    <DropdownItem>注册</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </el-col>
          </el-row>
        </Header>
        <Layout :style="{padding: '0 50px'}">
          <Sider hide-trigger :style="{background: '#fff'}">
            <classification></classification>
          </Sider>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <div style="padding-left: 22px;padding-top: 0px">
              <Input search enter-button="Search"  type="text" placeholder="Enter something..."
                     @on-search="handleQuery($event)" size="large"/>
              <br/>
            </div>
            <paper_result v-if="paper_result_flag==true" ref="paper_result" :page="page_id" :keyword="input_keyword" :papers="papers"></paper_result>
            <Page :total="100" :page-size="10" :current="page_id" show-elevator show-total @on-change="page_change"/>
          </Content>
        </Layout>
        <Footer class="layout-footer-center">2019 &copy; kunkun.inc</Footer>
      </Layout>
    </div>
  </div>

</template>
<script>
    import classification from "../searchPaperResult/classification";
    import paper_result from "../searchPaperResult/paper_result";
    import test from "./test";
    export default {
      name:'searchPaperResult',
        inject:['reload'],
        created(){
            this.input_keyword=window.localStorage.getItem("input_keyword")
            //this.paper...
            //在刷新前保存信息，刷新后取出
            // this.$axios.get('/api/get_papers').then((res)=>{
            //     this.papers=res.data
            // })
            // get_papers
            window.localStorage.removeItem("input_keyword")
        },
        methods:{
          page_change($event){
            this.page_id=$event
            this.paper_result_flag=false
            this.$nextTick(()=>{
                this.input_keyword='基于'
                let self=this
                ///api/get_paper_by_page?page='+self.page_id+'&keyword='+self.input_keyword
                this.$axios.get('/api/get_papers').then((res)=>{
                    console.log(res.data)
                    this.papers=res.data
                })
                this.paper_result_flag=true
            })
          },
          handleQuery($event){
              self.input_keyword=$event
              window.localStorage.setItem("input_keyword",self.input_keyword)
              //this.aixos...得到后端返回的论文，存到localStorage中，然后刷新（在index的刷新机制中也是这样，把input_keyword和papers存到localStorage，然后路由跳过来）
              // location.reload()
              this.$refs.paper_result.reload()
          }
        },
        data(){
          return {
              paper_result_flag:true,
              page_id:1,
              login:true,
              username:'lx',
              year:[2019,2018,2017],
              author:['张伟','向华强'],
              input_keyword:'',
              papers:[
                  {
                      "c_abstract" : "定位是机器人导航的关键问题,在缺乏结构信息的室外非结构化环境下,精确的三维定位面临更大挑战.本文提出一种基于相机与摇摆激光雷达融合的定位算法,重点解决在光照,地面起伏等因素影响下的机器人定位问题.本文结合激光雷达的深度信息和图像的颜色纹理信息,构建在时序帧间的特征点匹配关系;引入一种置信度评价方法,结合系统误差、数据关联、物体遮挡、特征跟踪等因素对特征点及其匹配关系进行评估,减少低质量特征的影响;最终将定位问题转化为特征点对的加权重投影误差优化问题予以解决.本文利用小型轮式移动机器人在越野和公园等典型非结构化环境下进行数据采集和实验验证.实验结果表明,与前沿的视觉定位算法相比,本文算法可有效提高在非结构化环境中的定位精度.",

                      "c_author" : "俞毓锋,赵卉菁",

                      "c_keywords" : "单目相机,激光雷达,多传感器融合,机器人定位,非结构化环境",

                      "c_periodical" : "自动化学报",

                      "c_title" : "基于相机与摇摆激光雷达融合的非结构化环境定位",

                      "e_periodical" : "Acta Automatica Sinica",

                      "e_title" : "0ff-road Localization Using Monocular Camera and Nodding LiDAR",

                      "fund" : "国家自然科学基金，国家863课题",

                      "indexID" : "2019, 45(9)",

                      "time" : "2019年12月31日",

                      "units" : "北京大学信息科学技术学院 北京100871;北京大学机器感知与智能教育部重点实验室 北京100871",

                      "url" : "http://d.old.wanfangdata.com.cn/Periodical/zdhxb201909015"

                  },

                  {

                      "c_abstract" : "针对自然生态蝴蝶多种特征检测的实际需求,以及生态环境下蝴蝶检测效率低、精度差问题,本文提出了一种基于迁移学习和可变形卷积深度神经网络的蝴蝶检测算法(Transfer learning and deformable convolution deep learning network,TDDNET).该算法首先使用可变形卷积模型重建ResNet-101卷积层,强化特征提取网络对蝴蝶特征的学习,并以此结合区域建议网络(Region proposal network,RPN)构建二分类蝴蝶检测网络,以下简称DNET-base;然后在DNET-base的模型上,构建RPN网络来指导可变形的敏感位置兴趣区域池化层,以便获得多尺度目标的评分特征图和更准确的位置,再由弱化非极大值抑制(Soft non-maximum suppression,Soft-NMS)精准分类形成TDDNET模型.随后通过模型迁移,将DNET-base训练参数迁移至TDDNET,有效降低数据分布不均造成的训练困难与检测性能差的影响,再由Fine-tuning方式快速训练TDDNET多分类网络,最终实现了对蝴蝶的精确检测.所提算法在854张蝴蝶测试集上对蝴蝶检测结果的mAP0.5为0.9414、mAP0.7为0.9235、检出率DR为0.9082以及分类准确率ACC为0.9370,均高于在同等硬件配置环境下的对比算法.对比实验表明,所提算法对生态照蝴蝶可实现较高精度的检测.",

                      "c_author" : "李策,张栋,杜少毅,朱子重,贾盛泽,曲延云",

                      "c_keywords" : "蝴蝶生态照,可变形卷积,迁移学习,深度卷积神经网络",

                      "c_periodical" : "自动化学报",

                      "c_title" : "一种迁移学习和可变形卷积深度学习的蝴蝶检测算法",

                      "e_periodical" : "Acta Automatica Sinica",

                      "e_title" : "A Butterfly Detection Algorithm Based on Transfer Learning and Deformable Convolution Deep Learning",

                      "fund" : "国家重点研发计划重点专项，国家自然科学基金，甘肃省基础研究创新群体",

                      "indexID" : "2019, 45(9)",

                      "time" : "2019年12月31日",

                      "units" : "兰州理工大学电气工程与信息工程学院 兰州730050,\r\n                        ,西安交通大学人工智能与机器人研究所 西安710049,\r\n                        ,厦门大学信息科学与及技术学院计算机科学系 厦门361005,",

                      "url" : "http://d.old.wanfangdata.com.cn/Periodical/zdhxb201909013"

                  },

                  {

                      "c_abstract" : "针对多自主体系统群集运动问题,本文研究了带有不匹配干扰的二阶系统有限时间包容控制.运用现代控制理论,设计了非线性观测器,对系统未知状态和干扰进行估计.在状态估计的基础上,构建了基于干扰观测器的多自主体系统的协同控制算法.应用代数图论和齐次性理论等方法,分析了二阶多自主体系统有限时间包容控制.数据仿真中应用基于观测器的包容控制算法,使得系统的运动状态最终都收敛到由多个领导者所围成的目标区域中,验证了本文结果的有效性.",

                      "c_author" : "李玉玲,杨洪勇,刘凡,杨怡泽",

                      "c_keywords" : "包容控制,有限时间,不匹配干扰,多领导者",

                      "c_periodical" : "自动化学报",

                      "c_title" : "带有不匹配干扰的二阶多自主体系统有限时间包容控制",

                      "e_periodical" : "Acta Automatica Sinica",

                      "e_title" : "Finite-time Containment Control of Second-order Multi-agent Systems With Mismatched Disturbances",

                      "fund" : "国家自然科学基金，山东省自然科学基金，烟台市重点研发项目",

                      "indexID" : "2019, 45(9)",

                      "time" : "2019年12月31日",

                      "units" : "鲁东大学信息与电气工程学院 烟台264025中国,\r\n                        ,鲁东大学信息与电气工程学院 烟台264025中国;新南威尔士大学电气工程与信息学院 悉尼2052澳大利亚,",

                      "url" : "http://d.old.wanfangdata.com.cn/Periodical/zdhxb201909014"

                  },

                  {

                      "c_abstract" : "局部异常检测(Local outlier factor,LOF)能够有效解决数据倾斜分布下的异常检测问题,在很多应用领域具有较好的异常检测效果.本文面向大数据异常检测,提出了一种快速的Top-n局部异常点检测算法MTLOF (Multi-granularity upper bound pruning based top-n LOF detection),融合索引结构和多层LOF上界设计了多粒度的剪枝策略,以快速发现Top-n局部异常点.首先,提出了四个更接近真实LOF值的上界,以避免直接计算LOF值,并对它们的计算复杂度进行了理论分析;其次,结合索引结构和UB1、UB2上界,提出了两层的Cell剪枝策略,不仅采用全局Cell剪枝策略,还引入了基于Cell内部数据对象分布的局部剪枝策略,有效解决了高密度区域的剪枝问题;再次,利用所提的UB3和UB4上界,提出了两个更加合理有效的数据对象剪枝策略,UB3和UB4上界更加接近于真实LOF值,有利于剪枝更多数据对象,而基于计算复用的上界计算方法,大大降低了计算成本;最后,优化了初始Top-n局部异常点的选择方法,利用区域划分和建立的索引结构,在数据稀疏区域选择初始局部异常点,有利于将LOF值较大的数据对象选为初始局部异常点,有效提升初始剪枝临界值,使得初始阶段剪枝掉更多的数据对象,进一步提高检测效率.在六个真实数据集上的综合实验评估验证MTLOF算法的高效性和可扩展性,相比最新的TOLF (Top-n LOF)算法,时间效率提升可高达3.5倍.",

                      "c_author" : "刘芳,齐建鹏,于彦伟,曹磊,赵金东",

                      "c_keywords" : "异常检测,局部异常检测,Top-n,剪枝策略",

                      "c_periodical" : "自动化学报",

                      "c_title" : "基于密度的Top-n局部异常点快速检测算法",

                      "e_periodical" : "Acta Automatica Sinica",

                      "e_title" : "A Fast Algorithm for Density-based Top-n Local Outlier Detection",

                      "fund" : "国家自然科学基金，山东省自然科学基金，山东省高等学校科技计划",

                      "indexID" : "2019, 45(9)",

                      "time" : "2019年12月31日",

                      "units" : "烟台大学计算机与控制工程学院 烟台264005中国,\r\n                        ,麻省理工学院计算机科学与人工智能实验室 剑桥MA 02139美国,",

                      "url" : "http://d.old.wanfangdata.com.cn/Periodical/zdhxb201909012"

                  }

              ]
          }
        },
        components: {paper_result, classification}
    }
</script>
