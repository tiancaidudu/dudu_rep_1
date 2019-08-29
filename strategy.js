const strategy = (()=>{
    const strategyMap = {
        sum:(...rest)=>{
            return [...rest].reduce((pre,cur)=>pre+cur,0)
        }
    }
    return {
        dispose:(type,...rest)=>{
            return strategyMap[type]&&strategyMap[type](...rest)
        },
        add:(type,fn)=>{
            strategyMap[type] = fn
        }
    }
})()

const sum = strategy.dispose('sum',1,2,3)

strategy.add('multiple',(...rest)=>{
    return [...rest].reduce((pre,cur)=>pre*cur ,1)
})

const multiple = strategy.dispose('multiple',1,2,3,4)
