function blogReadTime(){
  const el = document.getElementById('blog-readtime').textContent.replace(/['".:;]+/g,'').split(" ");
  let cleanString=el.filter(s => s.replace(/\s+/g, '').length !== 0);
  const totalWords=[]
  totalWords.push(cleanString)
  const words=totalWords[0].length
  // 1 words => approximately 0.4390243902439024 seconds
  let readTime=Math.floor((words*0.4390243902439024)/60)
const dtime = document.getElementById('readtime').textContent +=readTime + " Min read"      
}

blogReadTime()
