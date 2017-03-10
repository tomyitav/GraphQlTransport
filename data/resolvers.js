import { CarModel } from './connectors';

const resolveFunctions = {
  RootQuery: {

      car (){
          console.log('In resolve...');
          return CarModel.find((err, cars) => {
              console.log('errors: ', err)
              console.log('car: ', cars)
          })
      }
  }
  // Author: {
  //   posts(author){
  //     return author.getPosts();
  //   },
  // },
  // Post: {
  //   author(post){
  //     return post.getAuthor();
  //   },
  //   tags(post){
  //     return post.tags.split(',');
  //   },
  //   views(post){
  //     return new Promise((resolve, reject) => {
  //       setTimeout( () => reject('MongoDB timeout when fetching field views (timeout is 500ms)'), 500);
  //       View.findOne({ postId: post.id }).then( (res) => resolve(res.views) );
  //     })
  //   }
  // }
}

export default resolveFunctions;
