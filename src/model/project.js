import {sequelize, Model} from '../lib/sequelize'

const Project = sequelize.define('project', {
  name: {
    type: Model.STRING(30),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'name is required'
      },
      len: [2, 30]
    },
    comment: '项目名称'
  },
  ownerUUID: {
    type: Model.STRING(32),
    comment: '负责人'
  },
  deptId: {
    type: Model.INTEGER,
    comment: '所属部门'
  },
  beginTime: {
    type: Model.DATE,
    comment: '项目开始时间'
  },
  endTime: {
    type: Model.DATE,
    comment: '项目结束时间'
  },
  target: {
    type: Model.STRING,
    comment: '项目目标'
  },
  desc: {
    type: Model.STRING,
    comment: '项目描述'
  },
  level: {
    type: Model.INTEGER,
    comment: '项目等级'
  },
  createUUID: {
    type: Model.STRING(32),
    comment: '创建人'
  },
  style: {
    type: Model.INTEGER,
    comment: '项目封面',
    defaultValue: 0
  }
}, {
  comment: '项目表',
  paranoid: true
})
// 和下属项目(子项目)建立外键关系
// Project.hasMany(SubProject, {foreignKey: 'projectId', constraint:false, as:'subProjects'})
// SubProject.belongsTo(Project, {foreignKey: 'projectId', constraint:false})
// 如果没该表则创建
Project.sync().then(() => {
})

export default Project
