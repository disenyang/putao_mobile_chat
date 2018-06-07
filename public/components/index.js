
const Components={
}
export default {
	install:(Vue) => {
		Object.keys(Components).forEach(key =>{
			let component = Components[key];
			Vue.component(component.name, component);
		});
		
		Object.assign(Vue.prototype, {eLoading: eLoading});
		Object.assign(Vue.prototype, {eConfirm: eConfirm});
		Object.assign(Vue.prototype, {eMessage: eMessage});
	}
};