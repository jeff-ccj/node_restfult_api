import Project from '../model/project'
// import Staff from '../model/staff'
// import Task from '../model/task'

export default {
  /**
   * 获取全部列表
   * @returns {Promise<*>}
   */
  async getList (params) {
    let projectList = []
    return projectList
  },
  /**
   * 获取项目详情
   * @param id 项目id
   * @returns {Promise.<*>}
   */
  async getDetail (id) {
    return {}
  },
  /**
   * 添加项目
   * @param params 项目数据
   * @returns {Promise<*>}
   */
  async add (params) {
    return await Project.create(params)
  },
  /**
   * 更新项目
   * @param params 更新传参
   * @param id 项目id
   * @returns {Promise.<this>}
   */
  async update (params, id) {
    return await Project.update(params, {
      where: {id: id}
    })
  },
  /**
   * 删除项目
   * @param id 项目ID
   * @returns {Promise.<void>}
   */
  delete (id) {
    return Project.destroy({where: {id: id}})
  }
}
