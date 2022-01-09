import { uiTypes } from '../types/uiTypes'

export const openDashboardModal = () => ({
    type: uiTypes.openCreateDashboard,
})

export const openWidgetModal = () => ({
    type: uiTypes.openCreateWidget,
})

export const closeDashboardModal = () => ({
    type: uiTypes.closeCreateDashboard,
})

export const closeWidgetModal = () => ({
    type: uiTypes.closeCreateWidget,
})

export const openWidget = (wKey) => ({
    type: uiTypes.openWidget,
    payload: wKey,
})

export const closeWidget = () => ({
    type: uiTypes.closeWidget,
})