<template>
  <div>
    <el-row :gutter="80">
      <el-col :span="6" v-for="review in reviews" :key="review.id">
        <el-card>
          <div slot="header" class="clearfix">
            <span>书评{{ review.id }}</span>
          </div>
          <div>{{ review.content }}</div>
          <div style="margin-top: 10px;">
            <p>评分: {{ review.score }} ★</p>
            <p>作者: {{ review.author }}</p>
            <p>日期: {{ formatDate(review.date) }}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { getAllReview } from '@/api/api.js'
  export default {
    name: 'Review',
    data() {
      return {
        reviews: [],
      }
    },
    mounted() {
      getAllReview().then(res => {
        console.log(res)
        this.reviews = res
      })
    },
    methods: {
      formatDate(dateString) {
        return new Date(dateString).toLocaleDateString();
      }
    }
  }
</script>

<!-- { id: 1, title: '爱书豆', content: '这本名为《美洲: 定义原始之美》的书是毕淑敏老师不远万里赴美洲旅行的游记散文。 以女性的细腻和专业作家的功底，把美洲的自然原始之美描写得出神入化，令人向往。 美洲曾有过世界第五大文明之称的玛雅文明，在天文、历法、建筑和社会组织等方面有着惊人的成就...', rating: 3, author: '毕淑敏', date: '2023-04-01' },
{ id: 2, title: '芥子书屋', content: '在《世界尽头的疯人院》中，作家朱利安·桑克顿在总结了大量当事人员笔记的基础上，为我们展现了一段难以置信的南极生存记录。在“比利时号”号上的一支南极探险队由于不慎，被困在冰川之中长达一年之久。...', rating: 5, author: '朱利安·桑克顿', date: '2023-04-02' },
{ id: 3, title: '火花的流浪日记', content: '身体最大的器官是皮肤。 流鼻血时你是不是还在用纸巾塞住鼻孔？ 酒精的危害竟是高纯度可卡因的1.5倍！ 喝益生菌更容易引发胃肠胀气。 ...', rating: 4.5, author: '格雷厄姆．劳顿', date: '2023-04-03' },
{ id: 4, title: '葛罗米拍', content: '昨天是端午节，纪念公元前278年投江的诗人屈原。这个凭一己之力为大家挣到一天假期的诗人，只知道“楚辞之祖”。这几天看花式划龙舟也累了吧，歇一歇，来了解他所在的楚国是什么样的？', rating: 4, author: '张宏杰', date: '2023-04-01' },
{ id: 5, title: '一半暮色一半春意', content: '《晚春情话》是一部充满神秘色彩的中短篇小说集。没有结局的故事最适合安置想象。作家韩松落的笔触独具西北大地特色，透过他笔下的故事，能够感知到他既是冷峻敏锐的观察者，又是温柔细腻的记录者。', rating: 3, author: '韩松落', date: '2023-04-02' },
// 更多书评... -->