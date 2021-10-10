module.exports=function blogReadTime(){
        const el = document.getElementById('blog-readtime').textContent.replace(/['".:;]+/g,'').split(" ");
        let cleanString=el.filter(s => s.replace(/\s+/g, '').length !== 0);
        let totalWords=[]
        totalWords.push(cleanString)
        console.log(totalWords)
        let words=totalWords[0].length
        // 1 words => approximately 0.4390243902439024 seconds
        let readTime=((words*0.4390243902439024)/60).toFixed(1)
        if(readTime >=1){
            return (`${readTime} min read`)
        }else{
          return 0
        }
      
      }
