
# Generate ES256 private key
openssl ecparam -name prime256v1 -genkey -noout -out private.ec.key
# Convert it to pkcs8 format
openssl pkcs8 -topk8 -nocrypt -in private.ec.key -out private.pem

# Get public key
openssl ec -in private.pem -pubout -out public.pem

echo "PRIVATE_KEY="$(cat private.pem)"" > .env
echo "PUBLIC_KEY="$(cat public.pem)"" >> .env
