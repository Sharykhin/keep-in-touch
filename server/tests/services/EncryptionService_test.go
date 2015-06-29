package test

import (
	"crypto/md5"
	"crypto/sha1"
	"crypto/sha512"
	"encoding/hex"
	services "keep-in-touch/server/services"
	"testing"
)

func TestEncryption(t *testing.T) {
	//Initialize encrypt Service
	var encryptService services.EnctyptionService
	// Set testing string
	var testingStr string = "123456"

	// Get 512 hashed string
	h512 := sha512.New()
	h512.Write([]byte(testingStr))
	hashedStr := hex.EncodeToString(h512.Sum(nil))
	// Use service to get 512 hashed string
	hashToCheck := encryptService.EncryptString("123456", "sha512")

	if hashToCheck != hashedStr {
		t.Error("hashes are not equal for 512")
	}

	h1 := sha1.New()
	h1.Write([]byte(testingStr))
	hashedStr = hex.EncodeToString(h1.Sum(nil))

	hashToCheck = encryptService.EncryptString("123456", "sha1")

	if hashToCheck != hashedStr {
		t.Error("hashes are not equal for sha1")
	}

	hmd5 := md5.New()
	hmd5.Write([]byte(testingStr))
	hashedStr = hex.EncodeToString(hmd5.Sum(nil))

	hashToCheck = encryptService.EncryptString("123456", "md5")

	if hashToCheck != hashedStr {
		t.Error("hashes are not equal for md5")
	}

}
