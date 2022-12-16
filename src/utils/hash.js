// async calculateHashWorker(chunks){
//     return new Promise(resolve=>{
//         // web-worker 防止卡顿主线程
//         this.worker=new Worker('./hash.js')
//         this.worker.postMessage({chunks})
//         this.worker.onmessage=e=>{
//             const {progress,hash}=e.data
//             this.hashProgress=Number(progress.toFixed(2))
//             if(hash){
//                 resolve(hash)
//             }
//         }
//     })
// }


// let count =0
// const workLoop=async deadline=>{
//     // 计算，并且当前帧还没结束
//     while(count<chunks.length&&deadline.timeRemaining()>1){
//         await appendToSpark(chunks[count].file)
//         count++
//         // 没有了，计算完毕
//         if(count<chunks.length){
//             // 计算中
//             this.hashProgress=Number(
//                 ((100*count)/chunks.length).toFixed(2)
//             )
//             // console.log(this.hashProgress)
//         }else{
//             // 计算完毕
//             this.hashProgress=100
//             resolve(spark.end())
//         }
//     }
//     window.requestIdleCallback(workLoop)
// }
// window.requestIdleCallback(workLoop)