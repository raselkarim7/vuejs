Vue.component('button-counter',{
	template: `
				<button v-on:click="incrementCounter"> {{rasel}} </button> 
			  `,
	data(){
		return {	rasel: 0  } 
	},
	methods: {
		incrementCounter: function(){
			this.rasel++;
			this.$emit('increment');
		}, 
	}
	 
});	

Vue.component('select-box',{
	template: `
			<div>
				<select v-model="engletter" v-on:change="passEventByFun(engletter)">
					<option disabled value="">Please Select from Below</option>
					<option v-for="opt in options" v-bind:value=opt.value> {{ opt.text }}</option>
			    </select>
			    <p> Correspoing value of selection = 	{{ engletter }} </p>
			</div>    
		   `, 
	data(){
		return {  options:[
					      { text: 'One',   value: 'A' },
					      { text: 'Two',   value: 'B' },
					      { text: 'Three', value: 'C' },
					      { text: 'Four',  value: 'D' },
					      { text: 'Five',  value: 'E' }
			             ],
			      engletter: '', 
			   }
    	},
    methods: {
    	passEventByFun: function(pretty){
    		console.log(' at first here');
    		console.log(pretty);
    		this.$emit('secondboxevent',pretty);
    	}
    }

});

new Vue({
	el: '#root',
	data: {
	
		message: 'ye raate a mayasam nadi ka kinara.. ', 
		total: 0, 
		engnumber: '', 
		variousoptions: [ 
						
						]
	}, 

	methods: {
			incrementTotal: function ( ) {
			 	this.total++;
			},
			secondboxFun: function(moreprettty) {
					this.engnumber = ""; /* So much beauty!!! Delete this line and check. Solved by Zamy */	
					this.variousoptions = [ { text: 'Aowal', value: 1}, 
						 					{ text: 'Zim', value: 2 },
						  					{ text: 'Nasir', value: 3 }
									      ];
						console.log('here comes the rain again');
						console.log(moreprettty);
					if(moreprettty=='A'){
							this.variousoptions = [ { text: 'A1', value: 1}, 
													{ text: 'A2', value: 11}, 
													{ text: 'A3', value: 111}, 
													]; 
					}
					else if(moreprettty=='B'){
							this.variousoptions = [ { text: 'B1', value: 2}, 
													{ text: 'B2', value: 22}, 
													{ text: 'B3', value: 222}, 
													];

					}
					else if(moreprettty=='C'){
							this.variousoptions = [ { text: 'C1', value: 3}, 
													{ text: 'C2', value: 33}, 
													{ text: 'C3', value: 333}, 
													];						
						
					}
					else if(moreprettty=='D'){
							this.variousoptions = [ { text: 'D1', value: 4}, 
													{ text: 'D2', value: 44}, 
													{ text: 'D3', value: 444}, 
													];						
					}
					else if(moreprettty=='E'){
							this.variousoptions = [ { text: 'E1', value: 5}, 
													{ text: 'E2', value: 55}, 
													{ text: 'E3', value: 555}, 
													];						
					}
					else{

					}

			}
	}

});