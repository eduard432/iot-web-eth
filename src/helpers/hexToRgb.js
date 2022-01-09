export default function hexToRgb(hex = '') {

    const newHex = hex.substring(1)

	if (newHex.length !== 6) {
		throw new Error('Only six-digit hex colors are allowed.')
	}

	const aRgbHex = newHex.match(/.{1,2}/g)
	const aRgb = [
		parseInt(aRgbHex[0], 16),
		parseInt(aRgbHex[1], 16),
		parseInt(aRgbHex[2], 16),
	]
    
	return `rgb(${aRgb[0]}, ${aRgb[1]}, ${aRgb[2]})`
}
