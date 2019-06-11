'use strict'

const store = require('../store.js')
const config = require('../config.js')

const postLabs = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/appliances/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const getLabs = (formData) => {
  return $.ajax({
    method: 'GET',
    // url: config.apiUrl + '/appliances/' + store.appliance.id,
    // removing above as function is a GET all vs. single resource
    url: config.apiUrl + '/appliances/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}

const patchLabs = (formData) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/appliances/' + formData.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const delLabs = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/appliances/' + formData.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  postLabs,
  getLabs,
  patchLabs,
  delLabs
}
