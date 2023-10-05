import fs from 'fs'

interface Product{
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:{rate:number,count:number}
}

interface Purchase{
    purchase_id:number,
    product_id:number,
    customer_id:number,
    quantity:number
}

export class DataBase{
    
    constructor(public filename:string='db'){
        this.filename=filename+'.json'
        fs.appendFileSync(this.filename,"")
    }

    readProducts(table:string,id?:number){
        const db=JSON.parse(fs.readFileSync(this.filename,{encoding:'utf-8'}) || "{}")
        if(id){
            return db?.[table].filter((product:Product)=>{
                return product.id==id
            })
        }else return db?.[table]
    }

    create(table:string,data:Purchase){
        const db=JSON.parse(fs.readFileSync(this.filename,{encoding:'utf-8'}) || '{}')
        const purchase_id:number=db[table] ? db[table].length+1 : 1
        const purchaseData={...data,purchase_id:purchase_id}
        if(purchase_id==1){
            db[table]=[purchaseData]
        }else db[table]=[...db[table],purchaseData]
        fs.writeFileSync(this.filename,JSON.stringify(db))
        return true
    }

    readPurchase(table:string,id?:number){
        const db=JSON.parse(fs.readFileSync(this.filename,{encoding:'utf-8'}) || '{}')
        if(id){
            return db[table].filter((pur:Purchase)=>{
                return pur.customer_id==id
            })
        }
        return db?.[table]
    }

}