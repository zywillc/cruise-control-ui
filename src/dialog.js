'use strict'

import Vue from 'vue'
import ModalDialogs, { makeDialog } from 'vue-modal-dialogs'

import Login from '@/components/Login'
import MessageBox from '@/components/MessageBox'

// Initialize ModalDialogs
Vue.use(ModalDialogs)

// Make serval dialog functions
export const login = makeDialog(Login)
export const messageBox = makeDialog(MessageBox, 'content')
