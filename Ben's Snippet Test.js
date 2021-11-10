/**
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType UserEventScript
 * @NAMDConfig 
 * @NModuleScope SameAccount
 * Rapid 7
 * /Untitled-1
 * @module 
 * @description 
 */
define([], () => {

  /**
   * @function afterSubmit
   * @description description
   *
   * @public
   * @param  {type} scriptContext description
   * @return {type} - description
   */
  function afterSubmit(scriptContext) {

  }

   /**
    * @function beforeLoad
    * @description description
    *
    * @public
    * @param  {type} scriptContext description
    * @return {type} - description
    */
   function beforeLoad(scriptContext) {

   }

   /**
    * @function beforeSubmit
    * @description description
    *
    * @public
    * @param  {type} scriptContext description
    * @return {type} - description
    */
   function beforeSubmit(scriptContext) {

   }

  return /** @alias module: */ {
    afterSubmit: afterSubmit,
    beforeLoad: beforeLoad,
    beforeSubmit: beforeSubmit
  };
});