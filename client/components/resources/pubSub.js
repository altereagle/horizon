// @ - Publish subscribe model design pattern
define(["_"], function(_){
  return {
    // @ - Container for subscribers
    subscribers: {},

    // @ - Published data is saved here by topic name
    data: {},

    // @ - Subscriptions are each assigned a unqiue token
    token: {
      current : -1,
      getCurrent : function(){
        return this.current;
      },
      next    : function(){
        return ++this.current;
      }
    },

    // @ - Publishes data by topic to all subscribers
    trigger: function(topic, data){
      data = data || {}; // ! - Prevent undefined.property error
      
      var self = this;

      // @ - Create a container for topic data
      if(!self.data[topic]){
        self.data[topic] = [];
      }
      
      // @ - Add a timestamp to the data
      data.timestamp = new Date();
      
      // @ - Save the data
      self.data[topic].push(data);
      
      // @ - Get the subscribers to this topic
      var subscribers = self.subscribers[topic];
      
      // @ - Send data to subscribers of this topic
      _.each(subscribers, function(subscriber){
         subscriber.func(topic, data);
      });

      // @ - Return the data that was published
      return data;
    },

    // @ - Subscribe to a topic
    on: function(topic, func){
      var self = this;

      // @ - If there is no subscriber container for this topic, create one
      if(!self.subscribers[topic]){
        self.subscribers[topic] = [];
      }

      // @ - Set a token for this subscriber
      var token = self.token.next();

      // @ - Add this subscriber to the subscriber container for this topic
      self.subscribers[topic].push({
        func   : func,
        token  : token
      });

      // @ - Return the subscription token (for un-subscribing)
      return token;
    },

    // @ - Un-subscribe from a topic
    off: function(token){
      var self = this;
      // @ - A token is required to unsubscribe from a topic
      if(!token) return false;

      // @ - Get topics
      for(var topic in self.subscribers){
        if(self.subscribers.hasOwnProperty(topic)){
          if(self.subscribers[topic]){
            for(var i= 0, j=self.subscribers[topic].length; i<j; i++){
              if(self.subscribers[topic][i].token === token){
                // @ - Remove the subscriber by token
                self.subscribers[topic].splice(i,1);
                return token;
              }
            }
          }
        }
      }

      // @ - If no tokens are found, return false
      return false;
    }
  };
});