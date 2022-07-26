// const Product=require('../models/productModel');
class Features {

    constructor(query, queryStr) {
    (this.query=query), (this.queryStr=queryStr)
    }


    search() {
      const title = this.queryStr.title
        ? {
          Name: {
            $regex: this.queryStr.title,
          },
        }
        :{}
  
      this.query=this.query.find({ ...title });
      return this
    }

    filter() 
    {
      let min=Number(this.queryStr.mi||0);

      console.log(min)

      let Location=this.queryStr.Location
      ? {
        Location: {
          $regex: this.queryStr.Location,
        },
      }
      :{}


      let CompanyName=this.queryStr.CompanyName
        ? {
          Company: {
            $regex: this.queryStr.CompanyName,
          },
        }
        :{}

      const title = this.queryStr.title
        ? {
          Name: {
            $regex: this.queryStr.title,
          },
        }
        :{}

        this.query=this.query.find({ $and: [{ CTC: { $gte: min } }, { ...CompanyName }, { ...Location }] });
      
        return this;
    }

  }
  
  module.exports=Features