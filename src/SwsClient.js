'use strict'

import License from './License'

const serviceUriDefault = { id: 'id.serato.io', license: 'license.serato.io' }

class SwsClient {
  /**
   * Constructor
   */
  constructor ({ appId, secret = '', serviceUri = {} }) {
    this._appId = appId
    this._secret = secret
    // Set custom service URIs if provided
    this._serviceUri = {
      id: serviceUri.id ? serviceUri.id : serviceUriDefault.id,
      license: serviceUri.license ? serviceUri.license : serviceUriDefault.license
    }
    this._accessToken = ''
    // Create service clients
    this._licenseService = new License(this)
  }

  /**
   * Get the client application ID
   *
   * @return {String} Application ID
   */
  get appId () {
    return this._appId
  }

  /**
   * Get the client application secret
   *
   * @return {String} Application secret
   */
  get appSecret () {
    return this._secret
  }

  /**
   * Get the service URI endpoints for SWS services
   *
   * @return {Object} Service URIs
   */
  get serviceUri () {
    return this._serviceUri
  }

  /**
   * Set access token
   *
   * @param {String} data Token
   */
  set accessToken (data) {
    this._accessToken = data
  }

  /**
   * Get the current token
   *
   * @return {String} Current access token
   */
  get accessToken () {
    return this._accessToken
  }

  /**
   * Get the license service instance
   *
   * @return {License} License service
   */
  get license () {
    return this._licenseService
  }
}

export {
  SwsClient,
  serviceUriDefault
}